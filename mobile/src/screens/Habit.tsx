import { ScrollView, View, Text } from "react-native";
import { useRoute } from "@react-navigation/native";
import { BackButton } from "../components/BackButton";
import dayjs from "dayjs";
import { ProgressBar } from "../components/ProgressBar";
import { Checkbox } from "../components/Checkbox";

interface Params {
  date: string;
}

export function Habit() {
  const route = useRoute();
  const { date } = route.params as Params;

  const parsedDate = dayjs(date);
  const dayOfWeek = parsedDate.format("dddd");
  const dayAndMouth = parsedDate.format("DD/MM");
  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <BackButton />

        <Text className="mt-6 text-zinc-400 font-semibold text-base">
          {dayOfWeek}
        </Text>
        <Text className="text-white text-extrabold text-3xl">
          {dayAndMouth}
        </Text>

        <ProgressBar progress={50} />
        <View className="mt-6">
          <Checkbox title="Beber 2L de agua" checked={false} />
          <Checkbox title="Caminhar" checked />
        </View>
      </ScrollView>
    </View>
  );
}
