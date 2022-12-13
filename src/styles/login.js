import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    color: 'white',
    fontSize: 40,
    alignSelf: "center"
  },
  form: {
    backgroundColor: '#333333',
    padding: 15,
    flexDirection: "column",
    borderRadius: 10,
  },
  input: {
    backgroundColor: 'white',
    height: 30,
    width: 200,
  },
  label: {
    flexDirection: "row",
    marginTop: 10,
    alignItems: 'center',
  },
  labelText:  {
    color: 'white',
    marginRight: 4,
    width: 80,
  },
  button: {
    backgroundColor: '#7289da',
    marginTop: 10,
    width: 'auto',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  white: {
    color: 'white',
  },
  link: {
    textDecorationLine: 'underline'
  }
});