import add from "./components/add";
import sub from "./components/sub";

export default function() {
  const result1 = add(100, 200);
  const result2 = sub(500, 100);
  console.log(`result1: ${result1} - result2: ${result2} - ok!`);
}
