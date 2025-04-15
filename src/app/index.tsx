import { Link } from "expo-router";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "@/app/style"

export default function LoginScreen(){
{
        return (
            <View style={styles.cadastro}>
                <View style={styles.containerImage}>
                <Image style={styles.logoimagem}  source={require("@/assets/images/logo-pizzaria.png")}></Image>
                </View>
                <View style={styles.containerPai}>

                    
               
                    <View style={styles.containerbox}>
                        <Text>Email</Text>
                        <TextInput
                            style={styles.email}
                            placeholder="Seu Email"
                            placeholderTextColor="#aaa"
                        />
                    </View>

                    
     
                   
                    <View style={styles.containerbox}>
                        <Text>Senha</Text>
                        <TextInput
                            style={styles.email}
                            placeholder="Sua senha"
                            placeholderTextColor="#aaa"
                            secureTextEntry
                        />
                    </View>
     
                    {/* Botão de envio */}
                    <View style={styles.containerbox}>
                        <Link href={"/home/page"} asChild>
                            <TouchableOpacity style={styles.botao}>
                                <Text style={styles.botaoTexto}>entrar</Text>
                            </TouchableOpacity>
                        </Link>
                    </View>
                    <Link href={"/cadastro/page"}>
                     <Text style={styles.text}>crie sua conta</Text>

                    </Link>
     
                   
                </View>
            </View>
        );
    }

}