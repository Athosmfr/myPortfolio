const tel = document.getElementById('tel');

tel.addEventListener('keypress', (i) => telMask(i.target.value));
tel.addEventListener('change', (i) => telMask(i.target.value));

const telMask = (val) => {
  val = val.replace(/\D/g, "");
  val = val.replace(/^(\d{2,3})(\d{2})(\d{4,5})(\d{4})$/g, "+$1 ($2) $3-$4");
  tel.value = val;
}