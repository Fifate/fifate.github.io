var posts=["2024/10/19/jetpack compose之状态提升/","2022/10/16/welcome/","2024/10/10/不登高山，不知天之高也；不临深溪，不知地之厚也。/","2024/10/13/安卓开发环境搭建记录/","2024/10/08/幸福存折/","2024/10/14/改变已经悄然发生——松明21天行动营感悟/","2024/10/12/有惊无险/","2024/10/12/松明21天行动营/","2024/10/13/松明5天特训营/","2024/10/13/莫着急，彼岸虽远，恒心不辍，终会达到——给自己的一封信/","2024/10/18/赤松同学，我会带着你的心意继续前进！/","2024/10/19/改变他人是蠢，改变自己是神/","2024/10/21/不再害怕拒绝和被拒绝/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };