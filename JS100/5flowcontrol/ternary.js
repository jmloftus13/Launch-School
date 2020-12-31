//return foo() ? 'bar' : qux();
//rewrite the above ternary statement

if (foo()) {
  return 'bar';
 } else {  
  return qux();
}