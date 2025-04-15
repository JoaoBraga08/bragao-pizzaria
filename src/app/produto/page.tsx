import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "@/app/produto/styles";

export default function ProductScreen() {
    return (
        
        <View style={styles.descricao}>
          
            <Image
             source={require("@/assets/images/portuguesa.png")}
            style={styles.imagem}
            />
           
            <View style={styles.divpai}>
            
            <Text style={styles.nomedoproduto}>Pizza Portuguesa</Text>

            <Text style={styles.precoproduto}>R$ 32,90</Text>
 
      
            <Text style={styles.detalhe}>Sobre</Text>
            <Text style={styles.ingredientes}>
            É uma pizza popular no Brasil.Sua combinação única leva ovos cozidos, que a diferenciam de outras pizzas. Tem um sabor equilibrado, com o salgado do presunto, o cremoso do queijo e o toque especial dos ovos e azeitonas.

            </Text>
 
 
 
            <Text style={styles.detalhe}>ingredientes</Text>
                <Text style={styles.ingredientes}> • Massa de pizza</Text>
                <Text style={styles.ingredientes}> • Molho de tomate</Text>
                <Text style={styles.ingredientes}> • Queijo muçarela </Text>
                <Text style={styles.ingredientes}> • Presunto cozido </Text>
                <Text style={styles.ingredientes}> • Ovos cozidos </Text>
                <Text style={styles.ingredientes}> • Cebola fatiada </Text>
                <Text style={styles.ingredientes}> • Azeitonas </Text>
 
            
            <TouchableOpacity style={styles.botaodecomprar}>
                <Text style={styles.botaoComprar}>Comprar</Text>
            </TouchableOpacity>
            
        </View>
        </View>
       
    );
}