import { Component, PropsWithChildren } from "react";
import { View } from "@tarojs/components";
import "./index.less";

class Index extends Component<PropsWithChildren> {
  render() {
    return <View className="user">用户中心</View>;
  }
}

export default Index;
