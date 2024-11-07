
import one from "../assets/images/one.jpg"
import three from "../assets/images/three.jpg"
import two from "../assets/images/two.jpg"






function Products()
{
  return(
   
    <div class="main_section_container">

    <div class="Box">
        <img src={one} alt="one"></img>
        <p>MIRAL The perfumy of a strong ,bold and free woman 
            experimenting her freedom extremely.
        </p>

    </div>

    <div class="Box">
        <img src ={three} alt="three"></img>
        <p>India's First Golden Revolver-Shaped Perfume for men.Looking for a perfume perfect
            for you wicked.

        </p>
  
    </div>


    <div class="Box">
        <img src={two} alt="two"></img>
        <p> Exterme Perfume Spray for men , Long -Lasting,Fresh & Powerful Fragrance .
            Savour a soothing experience .
            
        </p>

    </div>

</div>

  )
}

export default Products