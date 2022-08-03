import {EditorClient, Menu, MenuType, Viewport, PageProxy, DocumentProxy} from 'lucid-extension-sdk';
import {ImportModal} from './importmodal';

const client = new EditorClient();
const menu = new Menu(client);
const viewport = new Viewport(client);
const document = new DocumentProxy(client);

client.registerAction('test', () => {
    const modal = new ImportModal(client);
    console.log("This is working !!!")
    modal.show();
});

client.registerAction('listPages', () => {
    let x = 10;
    let y = 10;
    for (const [pageId, page] of document.pages) {
        console.log(
            pageId,
            page.getTitle(),
            viewport.getCurrentPage() === page ? 'active' : ''
        );
        createProcessBlock(page, x, y);
        x += 10;
        y += 10;
    }
});

menu.addMenuItem({
    label: 'Test thing',
    action: 'listPages',
    menuType: MenuType.Main,
});


async function createProcessBlock(page : PageProxy,  x : number,  y : number) {
    await client.loadBlockClasses(['ProcessBlock']);
    const block = page.addBlock({
        className:'ProcessBlock',
        boundingBox:{
            x, y, w:200, h:160
        }
    });
    block.textAreas.set('Text', 'The new shape');
}