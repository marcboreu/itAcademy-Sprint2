
const footer = `
<style>
.site-footer
{
    background-color:#26272b;
    padding:45px 0 20px;
    font-size:15px;
    line-height:24px;
    color:#737373;
    width: 100vw;
}
.site-footer h6
{
  color:#fff;
  font-size:16px;
  text-transform:uppercase;
  margin-top:5px;
  letter-spacing:2px
}
.marcboreu {
    width: 35px;
    height: auto;
    display: inline-block;
    z-index: 100;
    padding: 0 10px;
}
.marcboreu:hover {
    z-index: 150;
    width: 35px;
    height: auto;
    display: inline-block;
    z-index: 100;
    padding: 0 10px;
  }


  .site-footer hr
  {
    border-top-color:#bbb;
    opacity:0.5
  }
  .site-footer hr.small
  {
    margin:20px 0
  }
  .site-footer a
  {
    color:#737373;
  }
  .site-footer a:hover
  {
    color:#3366cc;
    text-decoration:none;
  }
  .footer-links
  {
    padding-left:0;
    list-style:none
  }
  .footer-links li
  {
    display:block
  }
  .footer-links a
  {
    color:#737373
  }
  .footer-links a:active,.footer-links a:focus,.footer-links a:hover
  {
    color:#3366cc;
    text-decoration:none;
  }
  .footer-links.inline li
  {
    display:inline-block
  }
  .site-footer .social-icons
  {
    text-align:right
  }
  .site-footer .social-icons a
  {
    width:40px;
    height:40px;
    line-height:40px;
    margin-left:6px;
    margin-right:0;
    border-radius:100%;
    background-color:#33353d
  }
  .social-icons
  {
    padding-left:0;
    margin-bottom:0;
    list-style:none
  }
  .social-icons li
  {
    display:inline-block;
    margin-bottom:4px
  }
  .social-icons li.title
  {
    margin-right:15px;
    text-transform:uppercase;
    color:#96a2b2;
    font-weight:700;
    font-size:13px
  }
  .social-icons a{
    background-color:#eceeef;
    color:#818a91;
    font-size:16px;
    display:inline-block;
    line-height:44px;
    width:44px;
    height:44px;
    text-align:center;
    margin-right:8px;
    border-radius:100%;
    -webkit-transition:all .2s linear;
    -o-transition:all .2s linear;
    transition:all .2s linear
  }
  .social-icons a:active,.social-icons a:focus,.social-icons a:hover
  {
    color:#fff;
    background-color:#29aafe
  }
  .social-icons.size-sm a
  {
    line-height:34px;
    height:34px;
    width:34px;
    font-size:14px
  }
  .social-icons a.github:hover
  {
    background-color:#d5dc4a
  }
  .social-icons a.linkedin:hover
  {
    background-color:#007bb6
  }
  li {
      display: list-it;
  }
  
  @media (max-width:991px)
  {
    .site-footer [class^=col-]
    {
      margin-bottom:30px
    }
  }
  @media (max-width:767px)
  {
    .site-footer
    {
      padding-bottom:0
    }
    .site-footer .copyright-text,.site-footer .social-icons
    {
      text-align:center
    }
    .social-icons li.title
    {
      display:block;
      margin-right:0;
      font-weight:600
    }
  }
</style>

<footer class="site-footer">
<div class="container">
  <div class="row">
    <div class="col-sm-12 col-md-8">
      <h6>About me</h6>
      <p class="text-justify">I'm a developer, designer and entrepreneur. I just finished a web development bootcamp. I have a good eye for design and a firm work ethic. I can't stop learning and innovating constantly. I would love to have the chance to work for a new enterprise. With an extended experience in design and selling skills I conceive myself as a Front-End developer and aspiring to become a Full-stack developer. I wish to find a job where I can use and improve the skills I have learnt during the last two years. marcboreu.com.</p>
    </div>
    <div class="col-xs-6 col-md-3">
      <h6>Quick Links</h6>
      <ul class="footer-links">
<li><a href="https://marcboreu.github.io/personal/">About me</a></li>
<li><a href="mailto:marcboreu@gmail.com">Contact me</a></li>
<li><a href="https://www.linkedin.com/in/marcboreu/">Linkedin</a></li>
<li><a href="https://marcboreu.github.io/personal/portfolio">Portfolio</a></li>
<li><a href="https://github.com/marcboreu?tab=repositories">Repositories</a></li>
      </ul>
    </div>
  </div>
  <hr>
</div>
<div class="container">
  <div class="row">
    <div class="col-md-8 col-sm-6 col-xs-12">
      <p class="copyright-text">Copyright &copy; ${new Date().getFullYear()} All Rights Reserved || Created and developed by 
      <a href="https://marcboreu.com" target="_blank" rel="noreferrer">
      Marc Boreu 
      <img class="marcboreu" src="https://raw.githubusercontent.com/marcboreu/marcboreu/main/logo-footer-mb.png" alt="Marc Boreu" target="_blank"/>
      </a>
  </p>
    </div>
    <div class="col-md-4 col-sm-6 col-xs-12">
      <ul class="social-icons">
        <li><a class="github" href="https://github.com/marcboreu" target="_blank" rel="noreferrer"><i class="fa fa-github"></i></a>               </li>
        <li><a class="linkedin" href="https://www.linkedin.com/in/marcboreu/" target="_blank" rel="noreferrer"><i class="fa fa-linkedin">         </i></a></li>
      </ul>
    </div>
  </div>
</div>
</footer>`;


document.getElementById('footer').innerHTML = footer;