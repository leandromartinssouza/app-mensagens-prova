import { StyleSheet, TextInput, TextInputProps } from "react-native"

interface InputProps extends TextInputProps {}

const Input = ({...props}: InputProps) => {
    return (
        <TextInput {...props} style={style.input} placeholderTextColor={'#219653'}/>
    )
}

const style = StyleSheet.create({
    input: {
        width: '100%',
        padding: 20,
        fontSize: 20,
        backgroundColor: '#C9FDD5',
        color: '#219653',
        borderRadius: 15,
    }
})

export {Input}