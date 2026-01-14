import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { CustomButton } from "../components";
import { useDispatch } from "react-redux";
import { logout } from "../redux/userSlice";

const HomePage = () => {
  const [data, setData] = useState([]);
  const [isSaved, setisSaved] = useState(false);
  const [updateTheData, setUpdateTheData] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    getData();
  }, [isSaved]);

  const sendData = async () => {
    try {
      const docRef = await addDoc(collection(db, "reactNativeLesson"), {
        title: "Zero to Hero",
        content: "React Native Firebase tutorial",
        lesson: 12,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const getData = async () => {
    const allData = [];
    try {
      const querySnapshot = await getDocs(collection(db, "reactNativeLesson"));
      querySnapshot.forEach((doc) => {
        // console.log(`${doc.id} => ${doc.data()}`);

        allData.push({ ...doc.data(), id: doc.id });
      });
      setData(allData);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteData = async (id) => {
    try {
      await deleteDoc(doc(db, "reactNativeLesson", id));
    } catch (error) {}
  };

  const updateData = async (id) => {
    try {
      const lessonData = doc(db, "reactNativeLesson", id);
      await updateDoc(lessonData, {
        lesson: updateTheData,
      });
    } catch (error) {
      console.log(e);
    }
  };


  //KULLANICI ÇIKIŞ İŞLEMLERİ
  const handleLogout = ()=>{
    dispatch(logout())
  }

  return (
    <View style={styles.container}>
      <TextInput
        value={updateTheData}
        onChangeText={setUpdateTheData}
        placeholder="enter your data"
        style={{
          borderWidth: 1,
          width: "50%",
          paddingVertical: 10,
          textAlign: "center",
          marginBottom: 30,
        }}
      />

      {data &&
        data.map((x, i) => (
          <Pressable
            key={i}
            // onPress={() => {
            //   deleteData(x.id), setisSaved(isSaved === false ? true : false);
            // }}
            onPress={() => {
              updateData(x.id), setisSaved(isSaved === false ? true : false);
            }}
          >
            <Text>{i}</Text>
            <Text>ID: {x.id}</Text>
            <Text>{x.lesson}</Text>
            {/* <Text>{x.content}</Text> */}
          </Pressable>
        ))}
      <Text>HomePage</Text>

      <CustomButton
        buttonText="Save"
        setWidth="40%"
        handleOnPressed={() => {
          sendData(), setisSaved(isSaved === false ? true : false);
        }}
        buttonColor="blue"
        pressedButtonColor="lightgrey"
      />
      <CustomButton
        buttonText="Get Data"
        setWidth="40%"
        handleOnPressed={getData}
        buttonColor="gray"
        pressedButtonColor="lightgrey"
      />
      <CustomButton
        buttonText="Delete Data"
        setWidth="40%"
        handleOnPressed={deleteData}
        buttonColor="gray"
        pressedButtonColor="lightgrey"
      />
      <CustomButton
        buttonText="Update Data"
        setWidth="40%"
        handleOnPressed={updateData}
        buttonColor="gray"
        pressedButtonColor="lightgrey"
      />

      <CustomButton
        buttonText="LOGOUT"
        setWidth="20%"
        buttonColor="red"
        pressedButtonColor="lightgrey"
        handleOnPressed={handleLogout}
      />
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "tomato",
  },
});
