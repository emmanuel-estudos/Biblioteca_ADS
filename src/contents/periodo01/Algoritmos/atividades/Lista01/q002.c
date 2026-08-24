#include <stdio.h>

void main() {
	// declarando variáveis
	int num1, num2, num3, peso1, peso2, peso3;
	float media;

	// pedindo dados
		// primeiro número
		printf("Informe o primeiro numero e seu respectivo peso: ");
		scanf("%d%d", &num1, &peso1);

		// segundo número
		printf("Informe o segundo numero e seu respectivo peso: ");
		scanf("%d%d", &num2, &peso2);

		// terceiro número
		printf("Informe o terceiro numero e seu respectivo peso: ");
		scanf("%d%d", &num3, &peso3);

	// cálculo
	media = (float) (num1 * peso1 + num2 * peso2 + num3 * peso3) / (peso1 + peso2 + peso3);

	// informando resultado
	printf("A media ponderada dos numeros informados e seus respectivos pesos eh %.2f.", media);
}