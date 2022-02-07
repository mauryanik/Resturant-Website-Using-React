import React, {useState} from 'react'
import "./style.css"
import Menu from "./MenuApi"
import MenuCard  from './MenuCard';
import Navbar from './Navbar'
const uniqueList = [
    ...new Set(
    Menu.map((curElem) => {
    return curElem.category;
})
),"ALL"
];
console.log(uniqueList);
export const Resturant = () => {
    
    const [menuData, setMenuData] = useState(Menu);
    const [menuList, setMenuList] = useState(uniqueList);
    const filterItem = (category) => {
        if (category === "ALL")
        {
            setMenuData(Menu);
            return;
        }
        const updatedList = Menu.filter((curElem) => {
            return curElem.category === category;
        });
        setMenuData(updatedList);
    };
    return (
        <>
           <div >
                <center>
                 <ResturantName />
                </center>
        </div>
            <>
                <Navbar filterItem={filterItem} menuList={menuList}/>
            <MenuCard menuData={menuData}/>
            </>
        </>
       
    )
};
export const ResturantName = () => {
    return (
        <>
            <h4>Welcome to</h4>
            <br></br>
             <h1>ZAIKA RESTURANT</h1>
        </>
        
    )
}
 export default Resturant