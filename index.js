function surfto(form)
{
    var myindex=form.demo_doc.selectedIndex;

    window.location.replace(form.demo_doc.options[myindex].value);
}

function surfto2(form)
{
}

function lookup(items)
{
    var idx = items.selectedIndex;

    if (idx >= 0) {
        window.open(items.options[idx].value, "bwin", "location, menubar, toolbar, status, scrollbars, copyhistory");
    }
}