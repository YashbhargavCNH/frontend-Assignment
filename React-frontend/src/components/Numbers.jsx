function Numbers() {

    const numbers = [
        {
            value: "95%",
            label: "Client satisfaction"
        },
        {
            value: "+120",
            label: "Projects completed"
        }
    ];

    return (
        <section className="numbers-section">

            {numbers.map((number) => (

                <div className="number-item" key={number.label}>

                    <h2>
                        {number.value}
                    </h2>

                    <p>
                        {number.label}
                    </p>

                </div>

            ))}

        </section>
    );
}

export default Numbers;