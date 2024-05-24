import Image from "next/image";
import { SlArrowRight } from "react-icons/sl";
import './Home.css'
import Link from "next/link";
import Products from "@/components/products/Products";
import icon1 from '@/assets/Icon.png'
import icon2 from '@/assets/Icon2.png'
import icon3 from '@/assets/icon3.png'
import icon4 from '@/assets/icon4.png'

export default function Home() {
  return (
         <>
          <div className="hero">
            <div className="container">
               <div className="hero-left">
                  <p>Posted on <b>startup</b></p>
                  <h1>Step-by-step guide to choosing great font pairs</h1>
                  <p>By <span>James West</span>  |  May 23, 2022 </p>
                  <p className="hero-p">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                  <Link href={'/about'}>
                   <button>Read More <SlArrowRight /> </button>
                  </Link>
               </div>
            </div>
          </div>
          <div className="products">
             <div className="container">
                <h1>Popular blogs</h1>
                <Products/>
             </div>
          </div>
          <div className="category">
             <div className="container">
                <h1>Choose A Catagory</h1>
                <div className="category-cards">
                  <div className="category-card">
                      <Image alt="icon" width={0} height={0} src={icon1} />
                      <h2>Business</h2>
                      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                  </div>
                  <div className="category-card">
                      <Image alt="icon" width={0} height={0} src={icon2} />
                      <h2>Startup</h2>
                      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                  </div>
                  <div className="category-card">
                      <Image alt="icon" width={0} height={0} src={icon3} />
                      <h2>Economy</h2>
                      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                  </div>
                  <div className="category-card">
                      <Image alt="icon" width={0} height={0} src={icon4} />
                      <h2>Technology</h2>
                      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                  </div>
                </div>
             </div>
          </div>
         </>
  );
}
