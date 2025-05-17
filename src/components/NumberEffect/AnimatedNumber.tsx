import CountUp from "react-countup";

type AnimatedNumberProps = {
  value: number;
  delay: number;
  duration: number;
};

const AnimatedNumber = ({
  value = 100,
  delay = 2,
  duration = 5,
}: AnimatedNumberProps) => {
  return (
    <CountUp
      end={value}
      delay={delay}
      duration={duration}
      formattingFn={(val: number) =>
        val < 10 ? `0${Math.floor(val)}` : Math.floor(val).toString()
      }
    />
  );
};

export default AnimatedNumber;
