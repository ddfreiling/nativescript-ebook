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
    openBookWithEReader('44735.epub');
}

export function openBook2() {
    openBookWithEReader('horseman.epub');
}

function openBookWithEReader(bookAppRelativePath: string) {
    console.log(`openBookWithEReader`);

    const path = fs.File.fromPath(fs.path.join(fs.knownFolders.currentApp().path, bookAppRelativePath)).path;
    console.log(`path: ${path}`);

    const reader = new EBookReader();
    reader.open(path);
}