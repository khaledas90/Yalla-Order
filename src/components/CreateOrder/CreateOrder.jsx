import "./CreateOrder.css";

const styles = {
    section: {
        marginBottom: '20px',
    },
    header: {
        fontSize: '20px',
        fontWeight: 'bold',
        marginBottom: '10px',
    },
    inputGroup: {
        marginBottom: '10px',
    },
    button: {
        padding: '10px 20px',
        fontSize: '16px',
    },
};

function CreateOrder() {
    return (
        <form className="createOrder">
            <p className="mainHeader">Add Items Choices</p>
            <div className="mainContent">


                <div className="bagItem">
                    <p>Sausage Hawawshi</p>
                    <button className="clearBtn">-</button>
                    <div className="increaseAndDecrease">
                        <button className="decreaseBtn">-</button>
                        <div>1</div>
                        <button className="increaseBtn">+</button>
                    </div>
                    <span>Price on Selection</span>
                </div>
                <div style={styles.section}>
                    <h3 className="secHeader">Your Choice Of Size <span>(Choose 1)</span></h3>
                    <div className="inputs">
                        <div>
                            <div style={styles.inputGroup}>
                                <input type="radio" id="radio1" name="Size" value="Panda (90.00)" />
                                <label htmlFor="radio1">Panda (90.00)</label>
                            </div>
                            <div style={styles.inputGroup}>
                                <input type="radio" id="radio2" name="Size" value="Medium (132.00)" />
                                <label htmlFor="radio2">Medium (132.00)</label>
                            </div>
                        </div>

                        <div>
                            <div style={styles.inputGroup}>
                                <input type="radio" id="radio3" name="Size" value="Large Roll (162.00)" />
                                <label htmlFor="radio3">Large Roll (162.00)</label>
                            </div>
                            <div style={styles.inputGroup}>
                                <input type="radio" id="radio4" name="Size" value="Large (162.00)" />
                                <label htmlFor="radio4">Large (162.00)</label>
                            </div>
                        </div>
                    </div>



                </div>

                <div style={styles.section}>
                    <h3 className="secHeader">Your Choice Of Extras <span>(Choose up to 9 items)</span></h3>
                    <div className="inputs">
                        <div style={styles.inputGroup}>
                            <input type="checkbox" id="checkbox1" name="Extras" value="Extra Vegetables (5.00)" />
                            <label htmlFor="checkbox1">Extra Vegetables (5.00)</label>
                        </div>
                        <div style={styles.inputGroup}>
                            <input type="checkbox" id="checkbox2" name="Extras" value="Extra Salami (25.00)" />
                            <label htmlFor="checkbox2">Extra Salami (25.00)</label>
                        </div>
                        <div style={styles.inputGroup}>
                            <input type="checkbox" id="checkbox3" name="Extras" value="Extra Oriental Sausage (30.00)" />
                            <label htmlFor="checkbox3">Extra Oriental Sausage (30.00)</label>
                        </div>

                    </div>
                    <div className="inputs">
                        <div style={styles.inputGroup}>
                            <input type="checkbox" id="checkbox4" name="Extras" value="Extra Mozzarella Cheese (25.00)" />
                            <label htmlFor="checkbox4">Extra Mozzarella Cheese (25.00)</label>
                        </div>
                        <div style={styles.inputGroup}>
                            <input type="checkbox" id="checkbox5" name="Extras" value="Extra Kiri Cheese (25.00)" />
                            <label htmlFor="checkbox5">Extra Kiri Cheese (25.00)</label>
                        </div>
                        <div style={styles.inputGroup}>
                            <input type="checkbox" id="checkbox6" name="Extras" value="Extra Minced Meat (30.00)" />
                            <label htmlFor="checkbox6">Extra Minced Meat (30.00)</label>
                        </div>

                    </div>
                    <div className="inputs">
                        <div style={styles.inputGroup}>
                            <input type="checkbox" id="checkbox7" name="Extras" value="Extra Roumi Cheese (25.00)" />
                            <label htmlFor="checkbox7">Extra Roumi Cheese (25.00)</label>
                        </div>
                        <div style={styles.inputGroup}>
                            <input type="checkbox" id="checkbox8" name="Extras" value="Extra Pastrami (30.00)" />
                            <label htmlFor="checkbox8">Extra Pastrami (30.00)</label>
                        </div>

                    </div>


                </div>

                <div style={styles.section}>
                    <h3 className="secHeader">Your Choice Of Sauce <span>(Choose up to 2 items)</span></h3>
                    <div className="inputs">


                        <div style={styles.inputGroup}>
                            <input type="checkbox" id="checkbox9" name="Sauce" value="Barbecue Sauce (25.00)" />
                            <label htmlFor="checkbox9">Barbecue Sauce (25.00)</label>
                        </div>
                        <div style={styles.inputGroup}>
                            <input type="checkbox" id="checkbox10" name="Sauce" value="Ranch Sauce (20.00)" />
                            <label htmlFor="checkbox10">Ranch Sauce (20.00)</label>
                        </div>
                    </div>

                </div>

                <div style={styles.section}>
                    <h3 className="secHeader">Your Choice <span>(Choose up to 1 items)</span></h3>
                    <div style={styles.inputGroup}>
                        <input type="checkbox" id="checkbox4-1" name="Oriental" value="Make It Oriental (20.00)" />
                        <label htmlFor="checkbox4-1">Make It Oriental (20.00)</label>
                    </div>
                </div>
                <div className="text-center">
                    <button className="confirmBtn">Confirm</button>
                </div>
            </div>
        </form>
    );
};

export default CreateOrder