import { Animated, StyleSheet } from "react-native";
import React, { useEffect, useRef } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const ScalingStar = () => {
  const animationStar = useRef(new Animated.Value(0)).current;
  
  useEffect(()=>{
    Animated.loop(
        Animated.timing(animationStar,{
            toValue:1,
            duration:3000,
            useNativeDriver: false,
        })
    ).start();
  },[])
  const rotate = animationStar.interpolate({
    inputRange:[0,1],
    outputRange:["0deg","360deg"]
  });


  return (
    <Animated.View style={[styles.starContainer,{transform:[{rotate}]}]}>
      <FontAwesome name="star" size={200} color="gold" />
    </Animated.View>
  );
};
const styles = StyleSheet.create({
  starContainer: {
    width: 200,
    height: 200,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ScalingStar;
