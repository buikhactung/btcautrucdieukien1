let a = parseInt(prompt("nhap so a: "));
let b = parseInt(prompt("nhap so b: "));
let c = parseInt(prompt("nhap so c: "));
let max = a;
if (max < b) {
    max = b;
    if (max <c) {
        max = c;
    }
}
document.write("số lớn nhát là: " +max);

