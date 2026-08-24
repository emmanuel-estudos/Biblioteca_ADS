#include <stdio.h>

void main() {

	// declarando variáveis
	int num1, num2, num3;
	float media;

	// pedindo dados
	printf("Informe os tres numeros: ");
	scanf("%d%d%d", &num1, &num2, &num3);

	// calculando
	media = (float)(num1 + num2 + num3) / 3;

	// informando resultado
	printf("A media aritmetica dos dados informados eh %.2f \n", media);
}