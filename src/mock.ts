import { randomNumber} from "./helper/random-number";

export function generateChance() {
  const chance = randomNumber()
  return `you have ${chance} chance!`
}
