The (Facebook) Open Graph Tags that this plugin inserts are:
og:title: From post/page/archive/tag/... title.
og:site_name: From blog title.
og:url: From the post/page permalink.
og:description: From post/page excerpt if it exist, or from post/page content. From category/tag description on it's pages, if it exist. From tagline, or custom text, on all the others.
og:image: From a specific custom field of the post/page, or if not set from the post/page featured/thumbnail image, or if it doesn't exist from the first image in the post content, or if it doesn't exist from the first image on the post media gallery, or if it doesn't exist from the default image defined on the options menu. The same image chosen here will be used and enclosure/media:content on the RSS feed.
og:image:width and og:image:height: Image dimensions.
og:type: "website" or "blog" for the homepage, "product" for WooCommerce products and "article" for all the others.
article:author: From the user (post author) Faceboook Profile URL.
article:published_time: Article published time (for posts only)
article:modified_time and og:updated_time: Article modified time (for posts only)
article:section: From post categories.
article:publisher: The website Facebook Page URL.
og:locale: From WordPress locale or chosen by the user.
fb:admins: From settings on the options screen.
fb:app_id: From settings on the options screen.
og:price:amount and og:price:currency: Price on WooCommerce products.
The Twitter Card Tags that this plugin inserts are:
twitter:title: Same as og:title.
twitter:url: Sames as og:url.
twitter:description: Same as og:description.
twitter:image: Same as og:image.
twitter:creator: From the user (post author) Twitter account.
twitter:site: The website Twitter account.
twitter:card: With value "summary_large_image" or "summary".
