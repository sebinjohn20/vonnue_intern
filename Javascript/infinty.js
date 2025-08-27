function factorialToInfinity() {
    let num = 1;
    let fact = 1;

    while (true) {
        fact *= num;

        if (!isFinite(fact)) {  // Check if result becomes Infinity
            console.log(`Factorial of ${num} = Infinity`);
            break;
        }

        console.log(`Factorial of ${num} = ${fact}`);
        num++;
    }
}

factorialToInfinity();
