export default function NoticeContent(props) {

    return (
        <>
            {
                props.data.map((a, i) => {
                    return (
                        <tr key={i}>
                            <td className={'td_left'}>{props.data[i].num}</td>
                            <td className={'td_left'}>{props.data[i].title}</td>
                            <td className={'td_left'}>{props.data[i].content}</td>
                            <td className={'td_left'}>{props.data[i].date.toString()}</td>
                        </tr>
                    );
                })
            }

        </>
    );
}
