document.addEventListener("DOMContentLoaded", () => {
    const blogContent = document.getElementById("blog-content");
    const breadcrumbCurrent = document.getElementById("breadcrumb-current");
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('post');

    // Fetch the index of posts
    fetch('../posts.json')
        .then(response => {
            if (!response.ok) {
                throw new Error("Could not fetch posts.json. Note: If running locally without a server (file://), this will fail due to CORS.");
            }
            return response.json();
        })
        .then(posts => {
            if (postId) {
                // Show single post
                const postMeta = posts.find(p => p.id === postId);
                if (postMeta) {
                    loadSinglePost(postMeta);
                } else {
                    blogContent.innerHTML = "<p>Post not found.</p>";
                }
            } else {
                // Show list of posts
                renderPostList(posts);
            }
        })
        .catch(err => {
            console.error(err);
            blogContent.innerHTML = `<p style="color:red;">Error loading posts: ${err.message}</p>
            <p>If you are viewing this via a file:// URL, Javascript cannot fetch local files. Please run a local web server.</p>`;
        });

    function renderPostList(posts) {
        let html = '<div class="blog-list">';
        // Sort posts by date descending
        posts.sort((a, b) => new Date(b.date) - new Date(a.date));

        posts.forEach(post => {
            html += `
                <div class="project-card" style="padding: 20px;">
                    <h3 style="margin-top:0; color:#dcdcaa;"><a href="?post=${post.id}" style="color:inherit; text-decoration:none;">${post.title}</a></h3>
                    <div class="blog-date" style="color:#858585; font-size:12px; margin-bottom:10px;">${post.date}</div>
                    <div class="blog-summary" style="margin-bottom:15px;">${post.summary}</div>
                    <a href="?post=${post.id}" class="rounded-button">Read Post</a>
                </div>
            `;
        });
        html += '</div>';
        blogContent.innerHTML = html;
        if(breadcrumbCurrent) breadcrumbCurrent.textContent = "Blog";
    }

    function loadSinglePost(postMeta) {
        if(breadcrumbCurrent) breadcrumbCurrent.textContent = "Blog > " + postMeta.title;
        blogContent.innerHTML = "<h2>Loading...</h2>";

        fetch(`../posts/${postMeta.file}`)
            .then(res => {
                if (!res.ok) throw new Error("Markdown file not found.");
                return res.text();
            })
            .then(markdown => {
                const htmlContent = marked.parse(markdown);
                blogContent.innerHTML = `
                    <div class="blog-single-post">
                        <div class="blog-post-header">
                            <h1 class="post-title" style="color:#dcdcaa;">${postMeta.title}</h1>
                            <p class="post-date" style="color:#858585;">${postMeta.date}</p>
                        </div>
                        <div class="post-body">
                            ${htmlContent}
                        </div>
                        <div class="back-to-blog" style="margin-top: 30px;">
                            <a href="blog.html" class="rounded-button">← Back to Blog</a>
                        </div>
                    </div>
                `;
            })
            .catch(err => {
                console.error(err);
                blogContent.innerHTML = `<p style="color:red;">Failed to load post content.</p>`;
            });
    }
});
