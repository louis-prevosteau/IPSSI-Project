import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import AccountBar from "../common/AccountBar";
import NavigationBar from "../common/NavigationBar";
import Footer from "../common/Footer";

import axios from "axios";

const AdminDeleteCategory = () => {

    const [categorySelect, setCategorySelect] = useState([])
    const [selectedCategory, setSelectedCategory] = useState("");


    let categoriesArray = [];

    useEffect(() => {   
        axios
        .get("http://192.168.90.76:3000/category/selectAll")
        .then((response) => {
    
            let obj = response.data.listOfCategories
            for (let i = 0; i < obj.length; i++) {
                categoriesArray.push(obj[i].name);
            }
            setCategorySelect(categoriesArray)  
        })
        .catch((error) => {
          alert(error);
        });
      }, []);


    const showCategories = () => {
        let categoriesArray =[],
            MakeItem = function(X) {
                return <option>{X}</option>;
            };
        return <select className={"formfield"}>{categorySelect.map(MakeItem)}</select>;
        }
  

    const deleteCategory = () => {
    
        }


    let history = useHistory();
    const redirectToCatalogue = () => {
        history.push("/AdminCatalogue")
        }


  return (
    <div>
      <AccountBar />
      <NavigationBar />
      <div><h3>Supprimer une catégorie</h3>

                {showCategories()}

                  <form className={"globalForm"}
                  onSubmit={(e) => {
                  e.preventDefault();
                  }}>
                    
                    <div style={{display: "flex", justifyContent: "space-evenly", width: "50vw"}}>
                        <button className={"globalGreyButton"} onClick={redirectToCatalogue}>Annuler</button>
                        <button className={"globalRedButton"} onClick={deleteCategory}>Supprimer</button>
                    </div>
                    
                </form>
                </div>;
      <Footer />
    </div>
  );

};
export default AdminDeleteCategory;