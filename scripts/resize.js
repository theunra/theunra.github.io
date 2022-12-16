export function DynamicStyle(
    base_class = "", 
    style_modifier = {
        lwide : "--lwide",
        lsquare : "--lsquare",
        psquare : "--psquare",
        pwide : "--pwide"
    },
    use_func = false, 
    exec_func
    )
{
    this.base_class = base_class
    this.style_modifier = style_modifier
    this.use_func = use_func
    this.exec_func = exec_func
}

/**
 * Event for handling windows resize
 * 
 * Aspect ratio :
 * 
 * 1.777 16/9 lwide
 * 1.33 4/3 lsquare
 * 0.75 3/4 psquare
 * 0.56 9/16 pwide
 */
export function handleResize(styles)
{
    const screen_ratio = window.innerWidth/window.innerHeight

    for(let i = 0; i<styles.length; i++)
    {
        let style_modifier = ""
        const elem = document.getElementsByClassName(styles[i].base_class)

        if(screen_ratio < 0.6)
        {
            style_modifier = styles[i].style_modifier.pwide
            if(styles[i].use_func)
            {
                styles[i].exec_func.pwide()
            }
        }
        else if(screen_ratio < 0.8)
        {
            style_modifier = styles[i].style_modifier.psquare
            if(styles[i].use_func)
            {
                styles[i].exec_func.psquare()
            }
        }
        else if(screen_ratio < 1.4)
        {
            style_modifier = styles[i].style_modifier.lsquare
            if(styles[i].use_func)
            {
                styles[i].exec_func.lsquare()
            }
        }
        else if(screen_ratio < 1.8)
        {
            style_modifier = styles[i].style_modifier.lwide
            if(styles[i].use_func)
            {
                styles[i].exec_func.lwide()
            }
        }
        else
        {
            style_modifier = styles[i].style_modifier.lwide
            if(styles[i].use_func)
            {
                styles[i].exec_func.lwide()
            }
        }
        
        for(let f = 0; f<elem.length; f++)
        {
            const style_classes = elem[f].className.split(" ")
            let style_idx = 0

            for(let n = 0; n<style_classes.length; n++)
            {
                if(style_classes[n] == styles[i].base_class)
                {
                    style_idx = n
                    break
                }
            }

            if(style_idx < style_classes.length - 1 && style_classes[style_idx + 1].match(styles[i].base_class)) 
            {
                style_classes[style_idx + 1] = styles[i].base_class + style_modifier
            }
            else
            {
                style_classes.splice(style_idx + 1, 0, styles[i].base_class + style_modifier)
            }

            elem[f].className = style_classes.join(' ')
        }
    }
}