import * as observable from 'tns-core-modules/data/observable';
import * as pages from 'tns-core-modules/ui/page';
import * as fs from 'tns-core-modules/file-system';
import { HelloWorldModel } from './main-view-model';

import { EBookReader } from 'nativescript-ebook';

// Event handler for Page 'loaded' event attached in main-page.xml
export function pageLoaded(args: observable.EventData) {
    // Get the event sender
    let page = <pages.Page>args.object;
    page.bindingContext = new HelloWorldModel();
}

export function openBook() {
    console.log(`openBook`);

    const path = fs.File.fromPath(fs.path.join(fs.knownFolders.currentApp().path, 'orwell1984.epub')).path;
    console.log(`path: ${path}`);

    const reader = new EBookReader();
    reader.open(path);
}