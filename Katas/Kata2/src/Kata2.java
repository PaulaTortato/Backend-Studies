// Desafio de cálculo de volume: https://www.codewars.com/kata/58261acb22be6e2ed800003a

public class Kata2 {
  
  public static void main(String[] args) {
    int length = Integer.parseInt(args[0]);
    int width = Integer.parseInt(args[1]);
    int height = Integer.parseInt(args[2]);

    System.out.println(length * width * height);
  };
};