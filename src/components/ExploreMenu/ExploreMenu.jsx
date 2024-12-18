import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our menu</h1>
      <p className='explore-menu-text'>It is a long established fact that a reader will be distracted by the readable content of a page when 
        looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution 
        of letters, as opposed to using Content here, content here.</p>
        <div className="expolre-menu-list">
          {menu_list.map((item,index)=>{
            return (
              <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='expolre-menu-list-item'>
                <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                <p>{item.menu_name}</p>
              </div>
            )
          })}
        </div>
        <hr />
    </div>
  )
}

export default ExploreMenu
