var posts=["2022/10/16/welcome/","2024/10/08/幸福存折/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };