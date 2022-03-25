import React from "react";
import { View, StyleSheet, Text } from "react-native";
import {COLORS, FONTS, SIZES} from "../Constants/theme";

const AboutComponent = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.aboutHeaderText}>About of AshoYouth</Text>
      <Text style={styles.aboutText}>
        ကျနော်တို့ Asho Youth Application သည်
        အရှိုချင်းကာကွယ်ရေးတပ် - ACDF နှင့် မဟာမိတ်
        တပ်ပေါင်းစုများ၏ ထောက်ပို့ application ဖြစ်ပါတယ်ခင်ဗျာ
        အရှိုချင်းကာကွယ်ရေးတပ် - ACDF ၏ အမျိုးသားနိုင်ငံရေးပန်းတိုင်ရောက်ရှိသည်အထိ ပူပေါင်းပါဝင်ရန်
        စစ်အာဏာသိမ်းမှုကြောင့် ဆုံးရှုံးနစ်နာခဲ့သော ပြည်သူအားလုံး ပြန်လည်ထူထောင်ရေးနှင့်
        ပြည်ထောင်စုတိုင်းရင်းသားပြည်သူတစ်ရပ်လုံး အတွက် ညီနောင်မဟာမိတ်များအား
        အဓိက ပါဝင်ထောက်ပံ့သွားမည် ဖြစ်သည်။
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:"center",
    alignItems:"center"
  },
  aboutText: {
    color: COLORS.textSecondary,
    textAlign: "center",
    lineHeight: 23,
    marginVertical: SIZES.padding,
  },
  aboutHeaderText: {
    color: COLORS.primary,
    ...FONTS.h3,
  },
});

export default AboutComponent;
