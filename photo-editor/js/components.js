const Components = {

hero:(title)=>`

<section class="hero">

<h1>${title}</h1>

<p>Auto generated website</p>

</section>

`,

about:()=>`

<section>

<h2>About</h2>

<p>Auto generated content</p>

</section>

`,

gallery:()=>`

<section>

<h2>Gallery</h2>

<div class="gallery">

<div>Image</div>
<div>Image</div>
<div>Image</div>

</div>

</section>

`,

pricing:()=>`

<section>

<h2>Pricing</h2>

<div class="cards">

<div>$9</div>

<div>$29</div>

<div>$99</div>

</div>

</section>

`,

contact:()=>`

<section>

<h2>Contact</h2>

<input placeholder="Name">

<input placeholder="Email">

</section>

`

}
