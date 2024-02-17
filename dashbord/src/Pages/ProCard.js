
import React from 'react'
import img from '../images/a2.jpg'
import fav from '../images/fav-off.png'
import ReactStars from 'react-stars'

const ProCard = () => {
    const ratingChanged = (newRating) => {
        console.log(newRating)
      }
  return (
    <div className='d-flex justify-content-start flex-wrap '>
      <div className="card mx-2">
  <div className="main-content">
    <div className="header d-flex justify-content-center" style={{alignItems:'center',border:'2px solid white',borderRadius:'5px'}}>
    <img src={img} alt='imgproduct' style={{width:'60%',height:'100px',borderRadius:'50%'}} />
</div>
<p class="heading">Product Name</p>
<div className='d-flex justify-content-between'>
<div><ReactStars
  count={5}
  onChange={ratingChanged}
  size={24}
  color2={'#ffd700'} /></div>
<img src={fav} alt='favourat' />

</div>
<div className="categories my-2">
  <span className='icon-pencil2'>Update</span>
  <span className='icon-bin'>Delete</span>
</div>
<p>price :780 LE</p>
  </div>
<div className="footer">
  product Id : 125487dds54
</div>
</div>








<div className="card mx-2">
  <div className="main-content">
    <div className="header d-flex justify-content-center" style={{alignItems:'center',border:'2px solid white',borderRadius:'5px'}}>
    <img src={img} alt='imgproduct' style={{width:'60%',height:'100px',borderRadius:'50%'}} />
</div>
<p class="heading">Product Name</p>
<div className='d-flex justify-content-between'>
<div><ReactStars
  count={5}
  onChange={ratingChanged}
  size={24}
  color2={'#ffd700'} /></div>
<img src={fav} alt='favourat' />

</div>
<div className="categories my-2">
  <span className='icon-pencil2'>Update</span>
  <span className='icon-bin'>Delete</span>
</div>
  </div>
  <p>price :780 LE</p>

<div className="footer">
  product Id : 125487dds54
</div>
</div>



<div className="card mx-2">
  <div className="main-content">
    <div className="header d-flex justify-content-center" style={{alignItems:'center',border:'2px solid white',borderRadius:'5px'}}>
    <img src={img} alt='imgproduct' style={{width:'60%',height:'100px',borderRadius:'50%'}} />
</div>
<p class="heading">Product Name</p>
<div className='d-flex justify-content-between'>
<div><ReactStars
  count={5}
  onChange={ratingChanged}
  size={24}
  color2={'#ffd700'} /></div>
<img src={fav} alt='favourat' />

</div>
<div className="categories my-2">
  <span className='icon-pencil2'>Update</span>
  <span className='icon-bin'>Delete</span>
</div>
  </div>
  <p>price :780 LE</p>

<div className="footer">
  product Id : 125487dds54
</div>
</div>





<div className="card mx-2">
  <div className="main-content">
    <div className="header d-flex justify-content-center" style={{alignItems:'center',border:'2px solid white',borderRadius:'5px'}}>
    <img src={img} alt='imgproduct' style={{width:'60%',height:'100px',borderRadius:'50%'}} />
</div>
<p class="heading">Product Name</p>
<div className='d-flex justify-content-between'>
<div><ReactStars
  count={5}
  onChange={ratingChanged}
  size={24}
  color2={'#ffd700'} /></div>
<img src={fav} alt='favourat' />

</div>
<div className="categories my-2">
  <span className='icon-pencil2'>Update</span>
  <span className='icon-bin'>Delete</span>
</div>
  </div>
  <p>price :780 LE</p>

<div className="footer">
  product Id : 125487dds54
</div>
</div>




<div className="card mx-2">
  <div className="main-content">
    <div className="header d-flex justify-content-center" style={{alignItems:'center',border:'2px solid white',borderRadius:'5px'}}>
    <img src={img} alt='imgproduct' style={{width:'60%',height:'100px',borderRadius:'50%'}} />
</div>
<p class="heading">Product Name</p>
<div className='d-flex justify-content-between'>
<div><ReactStars
  count={5}
  onChange={ratingChanged}
  size={24}
  color2={'#ffd700'} /></div>
<img src={fav} alt='favourat' />

</div>
<div className="categories my-2">
  <span className='icon-pencil2'>Update</span>
  <span className='icon-bin'>Delete</span>
</div>
  </div>
  <p>price :780 LE</p>

<div className="footer">
  product Id : 125487dds54
</div>
</div>



<div className="card mx-2">
  <div className="main-content">
    <div className="header d-flex justify-content-center" style={{alignItems:'center',border:'2px solid white',borderRadius:'5px'}}>
    <img src={img} alt='imgproduct' style={{width:'60%',height:'100px',borderRadius:'50%'}} />
</div>
<p class="heading">Product Name</p>
<div className='d-flex justify-content-between'>
<div><ReactStars
  count={5}
  onChange={ratingChanged}
  size={24}
  color2={'#ffd700'} /></div>
<img src={fav} alt='favourat' />

</div>
<div className="categories my-2">
  <span className='icon-pencil2'>Update</span>
  <span className='icon-bin'>Delete</span>
</div>
  </div>
  <p>price :780 LE</p>

<div className="footer">
  product Id : 125487dds54
</div>
</div>


    </div>
  )
}

export default ProCard
