window.addEvent('domready', function () {
	var rows  = $$('table.adminlist tr[class^=row]');
        
    if (rows.length === 0) { return; }
    
    rows.each(function (row) {
        var currRow   = row.getElements('td'),
            currID    = currRow[2].getElement('a').getProperty('href').match(/product_id=([0-9]*)/)[1],        
            currCell  = currRow[3],
            multiLink = null;
            
        currCell.adopt(new Element('br'));
        
        multiLink = new Element('a', { 
            'onclick'   : "void window.open('" + plg_virtuemart_multiupload_root + "administrator/index3.php?page=product.file_form_multi.php&product_id=" + currID + "&no_menu=1&option=com_virtuemart', '_blank', 'status=no,toolbar=no,scrollbars=yes,titlebar=no,menubar=no,resizable=yes,width=800,height=540,directories=no,location=no,screenX=100,screenY=100');return false;",
            'href'      :  plg_virtuemart_multiupload_root + "administrator/index3.php?page=product.file_form_multi.php&product_id=" + currID + "&no_menu=1&option=com_virtuemart"
        });
        multiLink.adopt(new Element('img', { 'border': '0', 'align': 'middle', 'src': plg_virtuemart_multiupload_root + 'includes/js/ThemeOffice/backup.png'}));
        
        currCell.adopt(multiLink.appendText(' Multi'));

    });

});