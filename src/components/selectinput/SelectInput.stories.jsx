import SelectInput from "./SelectInput";

export default { title: "Components/Select Input", component: SelectInput };

export const Default = {
  args: {
    label: "Zodiac symbol",
    placeholder: "Your zodiac symbol (based off of your date of birth).",
    example: "Leo",
    options: [
      { value: "aries", label: "Aries" },
      { value: "taurus", label: "Taurus" },
      { value: "gemini", label: "Gemini" },
      { value: "cancer", label: "Cancer" },
      { value: "leo", label: "Leo" },
      { value: "virgo", label: "Virgo" },
      { value: "libra", label: "Libra" },
      { value: "scorpio", label: "Scorpio" },
    ],
  },
};
