import '../styles/Addlog.css'

export function Addlog() {

    return (
        <div>
            <section className="addlog">
                <div className="add-shot">
                    Add screenshot
                </div>

                <div className="file">
                    <input type="file" />
                </div>
                <div className="caption">
                    Add caption
                </div>

                <div className="textarea">
                    <textarea ></textarea>
                </div>

                {/* keeping flex in check */}
                <div>
                    <span className='text' style={{opacity: '0'}}>
                        - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque eveniet, omnis possimus repudiandae pariatur cupiditate quis, sequi laborum commodi veritatis fugiat magni rerum laudantium molestias tenetur quia enim? Autem, delectus.
                    </span>
                </div>
            </section>
        </div>
    )
}