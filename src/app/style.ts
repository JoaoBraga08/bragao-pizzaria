import { StyleSheet } from "react-native";
import { Header } from "react-native/Libraries/NewAppScreen";

export const styles = StyleSheet.create({
    cadastro : {
        backgroundColor: "black",
        flex: 1,
    },
    textoCadastro: {
        textAlign: "center", 
        color: "#fff", 
        fontSize: 24, 
        fontWeight: "bold", 
        marginTop: 20, 
    },
    containerPai: {
        
        flex: 1,
        width: "100%",
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
        backgroundColor: "red", 
        padding: 20,
    },
    containerbox: {
        marginBottom: 20,
        width: "90%",
        alignSelf: "center",
    },
    email: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 10,
        padding: 10,
        fontSize: 16,
        backgroundColor: "#fff",
        color: "#333",
        marginTop: 5,
    },
    botao: {
        backgroundColor: "black",
        borderRadius: 10,
        paddingVertical: 15,
        alignItems: "center",
        marginTop: 10,
    },
    botaoTexto: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
    logoimagem: {
        width: 250,
        height: 200,
        borderRadius: 8
    },
    containerImage: {
        alignItems: "center",
        justifyContent: "center",
        height: "35%",
       
    },
    text: {
        textAlign: "center",
        marginTop: 0
    }
});
