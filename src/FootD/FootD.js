import './FootD.css';
import React from 'react'
<script src="https://kit.fontawesome.com/b524156432.js" crossorigin="anonymous"></script>
const FootD = () => {
  return (
    <div>


<footer class="flex-rw">
  
  <ul class="footer-list-top">
    <li>
      <h6 class="footer-list-header">Notre univers</h6></li>
    <li><a href='/shop/about-mission' class="generic-anchor footer-list-anchor" itemprop="significantLink">Qui sommes-nous ?</a></li>
    <li><a href='/promos.html' class="generic-anchor footer-list-anchor" itemprop="significantLink">Qui sommes-nous ?</a></li>

  </ul>
  <ul class="footer-list-top">
    <li>
      <h4 class="footer-list-header">Catégories</h4></li>


    <li><a href='/Angels/cat/id/70' class="generic-anchor footer-list-anchor">Mobilier</a></li>
    <li><a href='/Home-Decor/cat/id/64' class="generic-anchor footer-list-anchor">Luminaire</a></li>

  </ul>
  <ul class="footer-list-top">
    <li id='help'>
      <h4 class="footer-list-header">Aide et Service</h4></li>
    <li><a href='/shop/about-contact' class="generic-anchor footer-list-anchor" itemprop="significantLink">Contact</a></li>
    <li><a href='/faq.html' class="generic-anchor footer-list-anchor" itemprop="significantLink">FAQ</a></li>
    
  </ul>

  <section class="footer-bottom-section flex-rw">
<div class="footer-bottom-wrapper">   
<i class="fa fa-copyright" role="copyright">
 
</i> 2019 Pavilion in <address class="footer-address" role="company address">Bergen, NY</address><span class="footer-bottom-rights"> - All Rights Reserved - </span>
    </div>
    <div class="footer-bottom-wrapper">
    <a href="/terms-of-use.html" class="generic-anchor" rel="nofollow">Terms</a> | <a href="/privacy-policy.html" class="generic-anchor" rel="nofollow">Privacy</a>
      </div>
  </section>
</footer>

    </div>
  )
}

export default FootD