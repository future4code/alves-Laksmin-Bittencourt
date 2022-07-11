function calculaNota(ex, p1, p2) {
let conceito = ((ex*1) + (p1*2) + (p2*3))/6
if (conceito >= 9) {
  return 'A'
} else if (conceito < 9 && conceito >= 7.5) {
  return 'B'
} else if (conceito < 7.5 && conceito >= 6) {
  return 'C'
} else 
  return 'D'
}