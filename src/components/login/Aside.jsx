function LoginAside(){
    
    return (
        <aside className="aside_right">
            <a onClick={() => window.location.reload()} style={{cursor:'pointer'}}>새로고침</a>
        </aside>
    )
}

export {LoginAside}