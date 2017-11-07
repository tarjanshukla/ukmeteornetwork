(function(){
  Vue.use(VueRouter);
  Vue.use(Vuex);

  const store = new Vuex.Store({
    state: {
        logFlag : false
    },
    mutations: {
        setLogin(state) {
            state.logFlag = true;
        }
    }
  });
  const Home = { template: '<div>a</div>'}
  const Foo = { template: '<div>b</div>'}

  const login = Vue.component('login',{
      template: `
          <div class="container">
              <div class="row">
                  <div class="col-sm-6 col-md-4 col-md-offset-4">
                      <div class="account-wall">
                          <form class="form-signin" v-on:submit.prevent="sign_in">
                              <input type="email" class="form-control" placeholder="Email" v-model="usrname" required autofocus>
                              <input type="password" class="form-control" placeholder="Password" v-model="usrpass" required>
                              <input type="submit" class="btn btn-lg btn-danger btn-block" value="Sign In">
                              <span class="clearfix"></span>
                          </form>
                      </div>
                  </div>
              </div>
          </div>`,
      data: function() {
          return {
              usrname: '',
              usrpass: ''
          }
      },
      methods: {
          sign_in: function() {
              var $this = this;
              // debugger;
              console.log(this.usrname,this.usrpass);
            $.ajax({
                method: 'post',
                url: BACKEND_URL + "/usercheck",
                data: JSON.stringify({
                    email : $this.usrname,
                    pass : $this.usrpass
                }),
                contentType: 'application/json',
                dataType: "json"
            }).success(function(data){
                console.log(data);
                if ( data.body.status == true ) {
                    $this.$store.commit("setLogin");
                    $this.$router.push('/upload');
                }
            })
              // $this.$router.push('/upload');
              // this.$router.push('/home');
          }
      },
      mounted: function() {
          if (this.$store.state.logFlag == true ) {
              this.$router.push('/upload');
          }
      }
  });

  const uploadComponent = Vue.component('uplodefile',{
      template: `
          <div>
              <div id="dropzone" class="dropzone"></div>
          </div>
          `,
      data: function() {
          return {}
      },
      methods: {

      },
      mounted: function(){
            if (this.$store.state.logFlag == false ) {
                this.$router.push('/login');
            } else {
                init_dropzone();
            }
      }
  })
  const router = new VueRouter({
      routes: [
      {
          path: '/login', component: login
      },{
          path: '/upload', component: uploadComponent
      },
      {
          path: '*', redirect: '/login'
      }]
  });

  const app = new Vue({
      router,
      store
  }).$mount('#app');

  function init_dropzone() {
      jQuery("#dropzone").dropzone({
        acceptedFiles: 'application/zip,application/x-zip-compressed,application/zip-compressed,multipart/x-zip,application/octet-stream',
        url: '#',
        autoProcessQueue: false,
        method: 'put',
        paramName: 'file',
        addRemoveLinks: true,
        parallelUploads: 20,
        maxFiles: 20,
        timeout: 600000,
        maxFilesize: 1000,
        uploadMultiple: true,
        init: function() {
          var me = this;
          this.on('addedfile', function(file) {
            var get_url = BACKEND_URL + '/getsignedurl?name=' + file.name + '&type=' + file.type;
            $.ajax({
              url: get_url,
              contentType: "application/json",
              success: function(data) {
                me.options.url = data.url;
                // enable auto process queue after uploading started
                me.options.autoProcessQueue = true;
                me.processQueue();
              }
            });
          });
    
          this.on('processing', function() {
          });
          this.on('uploadprogress',function(file,process){
              console.log(process);
          })
          this.on('sending', function(file, xhr) {
            var _send = xhr.send;
            xhr.setRequestHeader('x-amz-acl', 'public-read');
            xhr.setRequestHeader('content-type',file.type);
            xhr.setRequestHeader('Content-Disposition','attachment');
            xhr.send = function() {
              _send.call(xhr, file);
            }
            xhr.onerror = function(err) {
                console.log(err);
            }
          });
          this.on('error', function (file,error) {
            document.querySelector('[data-dz-errormessage]').innerHTML =
              'Cannot upload a file. Please, try again later.';
          });
          // disable queue auto processing on upload complete
          this.on('queuecomplete', function() {
              this.options.autoProcessQueue = false;
          });
        }
      });
  }
})();
