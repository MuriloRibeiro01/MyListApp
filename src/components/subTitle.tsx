import { Text, StyleSheet } from "react-native";

type SubTitleProps = {
    title: String;
}

export default function SubTitle(props: SubTitleProps) {
    return (
        <Text style={styles.subTitle}>{props.title}</Text>
    )
}

const styles = StyleSheet.create({
    subTitle: {
        color: '#00cbce',
        fontWeight: 'bold',
        fontSize: 15,
    }
})
