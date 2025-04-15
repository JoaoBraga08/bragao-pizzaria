import { Image, ScrollView, StyleSheet, Text, Touchable, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import { Link } from "expo-router";
 
export default function index() {
  const MENU =[
    {
      id:1,
      name:"portuguesa",
      description:" molho de tomate, mussarela, presunto, ovos cozidos, cebola, azeitonas e orégano.",
      price: 32.90,
      Image: require ("@/assets/images/portuguesa.png")
    },
    {
    id:2,
    name:"pepperoni",
    description:" molho de tomate, mussarela, pepperoni (salame temperado) e orégano.",
    price: 32.90,
    Image: require ("@/assets/images/pepperoni.png")
    },
    {
    id:3,
    name:"frango com catupiry",
    description:"molho de tomate, mussarela, frango desfiado temperado e Catupiry cremoso. ",
    price: 32.90,
    Image: require ("@/assets/images/frango-com-catupiry.png")
    },
   
  ]
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.headerImage}
          source={require("@/assets/images/logo-pizzaria.png")}
        />
        <Text style={styles.restauranteName}>Bragão pizzaria</Text>
        <Text style={styles.subtitle}> A melhor pizzaria do Brasil!!! </Text>
      </View>
 
      <View style = {styles.tabs}>
        {["combos", "sobremesa","sabores", "Bebidas"].map((item) =>(
          <TouchableOpacity>
            <Text style={styles.tabsName}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <ScrollView style= {styles.menuList}>
 
 
      {
        MENU.map((item)=> (
          <Link href={"/produto/page"} asChild>
          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuContent}>
            <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemDescription}>{item.description}</Text>
              <Text style={styles.itemPrice}>{item.price.toFixed(2)}</Text>
            </View>
            <Image  style= {styles.itemImage} source ={item.Image}/>
          </TouchableOpacity>
          </Link>
        ))
      }
          </ScrollView>
    </View>
  );
}
 
 
 