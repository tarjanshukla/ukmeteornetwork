(function(){
    Vue.use(VueRouter);
    Vue.use(Vuex);

    const store = new Vuex.Store({
        state: {
            usrmail: "",
            nameInfo: {},
            files: [],
            finished: true,
            dropzone:null,
            curEvent: {}
        },
        mutations: {
            setMail (state,mail) {
                state.usrmail = mail.usrmail;
                state.nameInfo = mail.info;
            },
            addFile (state,file) {
                state.files.push(file);
            },
            removeFile (state,file) {
                for ( var i = 0; i<state.files.length;i++ ){
                    if ( state.files[i] == file) {
                        state.files.splice(i,1);
                        break;
                    }
                }
            },
            setCurEvent(state,event) {
                state.curEvent = event;
            },
            setFinished(state) {
                state.finished = true;
            },
            setUnfinished(state) {
                state.finished = false;
            },
            setInitFile(state) {
                state.files = [];
                state.finished = false;
            },
            setDropzone(state, d) {
                state.dropzone = d; 
            }
        },
        getters: {
            getUserInfo: function(state) {
                return {
                    usrmail : state.usrmail,
                    info : state.nameInfo
                }
            },
            curEvent: function(state) {
                return state.curEvent;
            }
        }
    })

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
                    if ( data.body.status == true ) {
                        logFlag = true;
                        $this.$store.commit('setMail',{ usrmail : $this.usrname, info: data.body.info});
                        $this.$router.push('/main');
                    } else {
                        $.notify({
                            title: "Login",
                            message: "Wrong Information"
                        });
                    }
                })
            }
        },
        mounted: function () {
        }
    });

    const uploadComponent = Vue.component('uplodefile',{
        template: `
            <div class="col-sm-10 col-sm-offset-1">
                <div class="row mt-10">
                    <span class="col-sm-4 my-span">EVENT NAME</span>
                    <div class="col-sm-8">
                        <input class="form-control" v-model="eName">
                    </div>
                </div>
                <div class="row mt-10">
                    <span class="col-sm-4 my-span">EVENT DATE</span>
                    <div class="col-sm-8">
                        <input type="date" class="form-control" v-model="eDate">
                    </div>
                </div>
                <div class="row mt-10">
                    <span class="col-sm-4 my-span">EVENT TIME</span>
                    <div class="col-sm-8">
                        <input type="time" class="form-control" v-model="eTime">
                    </div>
                </div>
                <div class="row mt-10">
                    <span class="col-sm-4 my-span">DESCRIPTION</span>
                    <div class="col-sm-8">
                        <textarea rows=4 class="form-control" v-model="eDescription"></textarea>
                    </div>
                </div>
                <div class="row mt-10">
                    <span class="col-sm-4 my-span">STA.. NAME</span>
                    <div class="col-sm-8">
                        <input type="text" class="form-control" v-model="esName">
                    </div>
                </div>
                <label>FILES:</label>
                <div id="myzone" class="dropzone mt-10"></div>
                <button class="pull-right btn btn-primary" v-on:click="createEvent()" :disabled="bSubmit">Submit</button>
            </div>
            `,
        data: function() {
            return {
                eName: '',
                eDate: '',
                eTime: '',
                eDescription: '',
                esName: ''
            }
        },
        watch:{
            '$route' (to,from) {
                if (this.$store.getters.getUserInfo.usrmail == "") {
                    this.$router.push('/login')
                }
            }
        },
        computed: {
            bSubmit: function() {
                return this.$store.finished;
            }
        },
        methods: {
            createEvent: function() {
                var $this= this;
                var files = this.$store.state.files.join(",");
                if ( !this.eDescription ) {
                    $.notify({
                        title: 'Event Create',
                        message:'Please Input Event Description'
                    });
                    return;
                }
                if ( !this.eDate ) {
                    $.notify({
                        title: 'Event Create',
                        message:'Please Input Event Date'
                    });
                    return;
                }
                if ( !this.eTime ) {
                    $.notify({
                        title: 'Event Create',
                        message:'Please Input Event Time'
                    });
                    return;
                }
                if ( !this.eName ) {
                    $.notify({
                        title: 'Event Create',
                        message:'Please Input Event Name'
                    });
                    return;
                }
                if ( !this.esName ) {
                    $.notify({
                        title: 'Event Create',
                        message:'Please Input Event sName'
                    });
                    return;
                }
                $.ajax({
                    url: BACKEND_URL + `/createevent`,
                    method: 'POST',
                    data: JSON.stringify({
                        user: $this.$store.getters.getUserInfo,
                        description: $this.eDescription,
                        date: $this.eDate,
                        time: $this.eTime,
                        name: $this.eName,
                        sname: $this.esName,
                        files: $this.$store.state.files.join(",") || ""
                    }),
                    contentType: 'application/json',
                    dataType: 'json'
                }).success( function(res) {
                    if ( res.body.state == true) {
                        $.notify({
                            title: "Event Notificiation",
                            message: "Your Event has been Created !"
                        });
                    } else {
                        $.notify({
                            title: "Event Notification",
                            message: "Your Event has not Created because of some error"
                        });
                    }
                    $this.initEvent();
                })
            },
            initEvent: function() {
                this.$store.commit("setInitFile");
                this.eDescription = "";
                this.eName = "";
                this.esName = "";
                this.eTime = "";
                this.eDate = "";
                this.$store.state.dropzone.removeAllFiles(true);
            }
        },
        mounted: function(){
            init_dropzone(this.$store);
        }
    })

    const listEventComponent = Vue.component('listevent',{
        template: `
            <div class="col-sm-12">
                <div class="row mt-10" v-for="event in events">
                    <div class="col-sm-6">
                        <a v-on:click="getUrl(event)" class=""><img src="/img/fireballs/M20170731_024335_Chard_CDP.jpg" class="img-responsive"></a>
                    </div>
                    <div class="col-sm-6">
                        <h3 class="title"><a v-on:click="getUrl(event)">{{event.name}}</a> {{event.d_date}}</h3>
                        <p>Reported by {{event.username}}</p>
                    </div>
                </div>
            </div>
        `,
        methods: {
            getUrl : function(event) {
                // return "{ path : 'main/alert-detail/', params: { id:" + event.id + "}}";
                this.$store.commit('setCurEvent',event);
                this.$router.push( { path: `/main/detail/${event.id}`});
            }
        },
        watch: {
            '$route' (to,from) {
                var $this = this;
                $this.events = [];
                $.ajax({
                    url: BACKEND_URL + "/getevent",
                    data: JSON.stringify({
                        year: parseInt($this.$route.params.year),
                    }),
                    dataType: 'json',
                    contentType: 'application/json',
                    method: 'POST'
                }).success(function(res){
                    if ( res.body.status == true ) {
                        $this.events = res.body.data.Items;
                        if ($this.events.length == 0) {
                            $.notify({
                                title: 'Event Notification',
                                message: 'There is no Event'
                            });
                        }
                        console.log($this.events);
                    } else {
                        $.notify({
                            title: "Event Notificiation",
                            message: "Can not Get Events"
                        });
                    }
                })
            }
        },
        data: function() {
            return {
                events:[]
            }
        },
        mounted: function() {
            var $this = this;
            console.log(parseInt($this.$route.params.year));
            $.ajax({
                url: BACKEND_URL + "/getevent",
                data: JSON.stringify({
                    year: parseInt($this.$route.params.year),
                }),
                dataType: 'json',
                contentType: 'application/json',
                method: 'POST'
            }).success(function(res){
                if ( res.body.status == true ) {
                    $this.events = res.body.data.Items;
                    if ($this.events.length == 0) {
                        $.notify({
                            title: 'Event Notification',
                            message: 'There is no Event'
                        });
                    }
                } else {
                    $.notify({
                        title: "Event Notificiation",
                        message: "Can not Get Events"
                    });
                }
            })
        },
        beforeUpdate: function() {
            console.log("updated");
        }
    })

    const submitAnswerComponent = Vue.component('submitAnswer',{
        template: `
        <div class="jumbotron home-fireball" style="max-height: none;">
            <form class="form-horizontal">
                <div class="form-group">
                    <label for="inputEmail3" class="col-sm-2 control-label">your Answer</label>
                    <div class="col-sm-10">
                        <textarea class="form-control" id="inputEmail3" v-model="answer" rows=2></textarea>
                    </div>
                </div>
                <div class="form-group">
                    <label for="inputPassword3" class="col-sm-2 control-label">Files:</label>
                    <div class="col-sm-10">
                        <div id="myzone" class="dropzone"></div>
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-sm-offset-2 col-sm-10">
                        <input type="submit" class="btn btn-primary" value="Submit" v-on:click="submitAnswer" :disabled="!bSubmit">
                    </div>
                </div>
            </form>
        </div>
        `,
        data: function() {
            return {
                answer:''
            }
        },
        computed: {
            bSubmit: function() {
                return this.$store.state.finished;
            }
        },
        props:['eId','username'],
        methods: {
            submitAnswer: function(){
                var $this = this;
                if (!this.answer) {
                    $.notify({
                        title:'Answer',
                        message: 'Please input your Answer'
                    });
                    return;
                }
                var userName = this.$store.state.nameInfo.name + " " + this.$store.state.nameInfo.surname
                $.ajax({
                    method: 'post',
                    url : BACKEND_URL  + "/answers",
                    data: JSON.stringify({
                        event: $this.eId,
                        description: $this.answer,
                        files: $this.$store.state.files.join(","),
                        username: userName
                    }),
                    contentType: 'application/json',
                    success: function(res){
                        
                        if ( res.body.state == true ){
                            $.notify({
                                title: "Event Notificiation",
                                message: "Your Answers has been submitted !"
                            });
                            var tempAnswer = $this.answer;
                            var tempFiles = $this.$store.state.files.join(",");
                            $this.$parent.addAnswer({
                                description: tempAnswer,
                                files: tempFiles,
                                username: $this.username
                            });
                            $this.answer = '';
                            $this.$store.commit('setInitFile');
                            $this.$store.state.dropzone.removeAllFiles(true);
                            $this.$store.state.finished = true;
                        } else {
                            $.notify({
                                title: "Event Notificiation",
                                message: "Your Answers has not submitted !"
                            });
                        }
                    }
                })
            }
        },
        mounted: function(){
            console.log(this.eId);
            this.$store.commit("setInitFile");
            this.$store.commit("setFinished");
            init_dropzone(this.$store);
        }

    });
    const answersComponent = Vue.component('answers',{
        template: `
            <div>
                <div v-for="answer in answers" class="answerdiv">
                    <p><sm class="answer">Answered by :</sm>{{answer.username}}</p>
                    <p>{{answer.description}}</p>
                    <hr>
                    <div v-for="file in getFileList(answer.files)">
                        Attached Files: <a v-bind:href="getDownloadLink(file)" target = "_blank">{{file}}</a>
                    </div>
                </div>
            </div>
        `,
        props:['eId'],
        data: function() {
            return {
                answers: []
            }
        },
        methods: {
            getFileList: function(files) {
                return files.split(",");
            },
            getDownloadLink: function(url) {
                return "https://ukmon-archive.s3-eu-west-1.amazonaws.com/event/" + url
            },
            answer_submit: function(data) {
                this.answers.push(data);
            }
        },
        mounted: function() {
            var $this = this;
            $.ajax({
                method:'get',
                url: BACKEND_URL + '/answers?event=' + $this.eId,
                contentType: 'application/json',
                success: function(res) {
                    if ( res.body.state == true ) {
                        $this.answers = res.body.result.Items;
                    } else {
                        $.notify({
                            title:"Event Notification",
                            message: "Can't get answers for this Event"
                        });
                    }
                }
            });
        }
    });
    const detailComponent = Vue.component('eventdetail',{
        template: `
            <div class="col-sm-12">
                <div class="row mt-10">
                    <div class="col-sm-6">
                        <img src="/img/fireballs/M20170731_024335_Chard_CDP.jpg" class="img-responsive">
                    </div>
                    <div class="col-sm-6">
                        <p> Name : {{event.name}} </p>
                        <p> Date : {{event.d_date}} </p>
                        <p> Time : {{event.time}} </p>
                        <p> SName: {{event.sname}} </p>
                        <p> Reported By {{event.username}} </p>
                    </div>
                </div>
                <div class="row mt-10">
                    <div v-for="file in files" class="col-sm-3">
                        <a v-bind:href="getUrl(file)" target = "_blank">{{file}}</a>
                    </div>
                    <div class="col-sm-12">
                        Description : {{event.description}}
                    </div>
                </div>
                <get-answers :e-id="event.id" ref="answers"></get-answers>
                <submit-controller :e-id="event.id" :username="event.username"></submit-controller>
            </div>
        `,
        data: function() {
            return {
                event: {},
                files: [],
                downloadlinks: {}
            }
        },
        methods: {
            getUrl: function(file) {
                return "https://ukmon-archive.s3-eu-west-1.amazonaws.com/event/" + file
            },
            addAnswer: function( data) {
                this.$refs.answers.answer_submit(data);
            }
        },
        created: function() {
            this.event =this.$store.getters.curEvent;
            this.files = this.event.files.split(",");
        },
        components: {
            'submit-controller' : submitAnswerComponent,
            'get-answers': answersComponent
        }
    })
    const MainComponent = Vue.component('main',{
        template: `
            <div class="row">
                <div class="col-sm-3 left-menu">
                    <p><a class="btn btn-danger btn-lg btn-block" href="/upload/"><i class="fa fa-file-archive-o" aria-hidden="true"></i> Upload to archive</a></p>
                    <p><router-link class="btn btn-danger btn-lg btn-block" to="/main/newalert"><i class="fa fa-flag" aria-hidden="true"></i> Fireball Alert</router-link></p>
                    <h3>Fireball Events:</h3>
                    <div class="list-group">
                        <router-link to="/main/list/2017" class="list-group-item event-detail">2017</router-link>
                        <router-link to="/main/list/2016" class="list-group-item event-detail">2016</router-link>
                        <router-link to="/main/list/2015" class="list-group-item event-detail">2015</router-link>
                        <router-link to="/main/list/2014" class="list-group-item event-detail">2014</router-link>
                        <router-link to="/main/list/2013" class="list-group-item event-detail">2013</router-link>
                    </div>
                </div>
                <div class="col-sm-9">
                    <router-view></router-view>
                </div>
            </div>
        `,
        data: function() {
            return {}
        },
        mounted: function() {
            if (this.$store.getters.getUserInfo.usrmail == "") {
                this.$router.push('/login');
            } else {
                this.$router.push('/main/list/2017');
            }
        }
    })
    const router = new VueRouter({
        routes: [
        {
            path: '/login', component: login
        },{
            path: '/upload', component: uploadComponent
        }, {
            path: '/main', component: MainComponent,
            children: [{
                path: 'newalert',
                component: uploadComponent
            },{
                path: 'list/:year',
                component: listEventComponent,
            }, {
                path: 'detail/:id',
                component: detailComponent
            }]
        }]
    });

    const app = new Vue({
        router,
        store,
        data: function() {

        },
        watch:{
            '$route' (to,from) {
                if (this.$store.getters.getUserInfo.usrmail == "") {
                    this.$router.push('/login')
                }
            }
        },
        mounted: function() {
            this.$router.push('/login');
        }
    }).$mount('#app');

    function init_dropzone(store) {
        jQuery("#myzone").dropzone({
            url: '/#',
            method: 'put',
            autoProcessQueue: false,
            paramName: 'file',
            addRemoveLinks: true,
            parallelUploads: 20,
            maxFiles: 20,
            maxFilesize: 100,
            uploadMultiple: true,
            init: function() {
                var me = this;
                store.commit("setDropzone",this);
                this.on('addedfile', function(file) {
                    var get_url = BACKEND_URL + '/geteventurl?name=' + file.name + '&type=' + file.type;
                    $.ajax({
                        url: get_url,
                        success: function(data) {
                            me.options.url = data.url;
                            file.uploadName = data.file;
                            // enable auto process queue after uploading started
                            me.options.autoProcessQueue = true;
                            me.processQueue();
                        }
                    });
                });

                this.on('sending', function(file, xhr) {
                  var _send = xhr.send;
                  xhr.setRequestHeader('x-amz-acl', 'public-read');
                  xhr.send = function() {
                    _send.call(xhr, file);
                  }
                });

                this.on('processing', function(){
                    store.commit("setUnfinished");
                    console.log("Set Unfinished");
                })

                this.on('success', function(file) {
                    store.commit("addFile",file.uploadName);
                });

                this.on('removedfile',function(file) {
                    store.commit("removeFile",file.uploadName);
                });
          
                this.on('error', function () {
                  document.querySelector('[data-dz-errormessage]').innerHTML =
                    'Cannot upload a file. Please, try again later.';
                });
                // disable queue auto processing on upload complete
                this.on('queuecomplete', function() {
                    this.options.autoProcessQueue = false;
                    store.commit("setFinished");
                    console.log("Set Finished");
                });
              }
        });
        
    }
})();
