import { StyleSheet } from "react-native";
import { red } from "react-native-reanimated/lib/typescript/Colors";
 
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
        padding: 20,
        alignItems: "center",
    },
  
    
    imagem: {
        width: 415,
        height: 200,
        borderRadius: 10,
        padding: 100,
        
        marginBottom: 20,
    },
    nomedoproduto: {
        fontSize: 24,
        fontWeight: "bold",
        color: "black",
        marginBottom: 10,
        textAlign: "center",
    },
    descricao: {
        fontSize: 16,
        color: "black",
        textAlign: "center",
        marginBottom: 20,
        backgroundColor: "red"
    },
    precoproduto: {
        fontSize: 20,
        fontWeight: "bold",
        color: "black",
        marginBottom: 20,
    },
    botaodecomprar: {
        backgroundColor: "black", 
        width: 250,
        height: 40,
        paddingVertical: 5,
        paddingHorizontal: 1, 
        borderRadius: 10, 
        marginBottom: 10,
    },
    botaoComprar: {
        color: "#fff",
        fontSize: 15,
        fontWeight: "bold",
        textAlign: "center",
    },
    divpai: {
        alignItems: "center",
        backgroundColor: "red",
        padding: 50,
        

    },
    detalhe: {
        fontSize: 20,
        fontWeight: "bold",
        color: "black",
        marginBottom: 10,
        textAlign: "center",
    },
    ingredientes: {
        fontSize: 16,
        color: "black",
        marginBottom: 5,
        textAlign: "left",
        alignSelf: "flex-start",
            paddingLeft: 10
        }
    });
 