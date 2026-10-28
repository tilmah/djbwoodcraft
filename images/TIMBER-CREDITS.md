# Timber photo credits (about page)

Stock photos from Wikimedia Commons, used until David photographs his own samples. Not served (`*.md` is in `.assetsignore`).

Common edit for all five: centre-cropped square on a grain area, resized to 800x800, exposure (gamma) set to a target brightness, warm white balance (red x1.03, blue x0.95 plus a per-timber tint), saturation reduced, blacks lifted (4%), light blur (0x0.8), JPEG q75, metadata stripped. Colour adjusted, so these are modified versions.

| File | Timber | Commons file page | Author | Licence | Per-image changes |
|---|---|---|---|---|---|
| `timber-red-cedar.jpeg` | Toona (record lists Toona calantas, T. ciliata, T. sureni together) | https://commons.wikimedia.org/wiki/File:Collection_de_bois_de_la_Xyloth%C3%A8que_du_Cirad._Bois_de_l%27Atlas_des_bois_tropicaux._Toona_calantas_Merr._%26_Rolfe%2C_Toona_ciliata_M._Roem._%28Syn._Cedrela_toona%29%2C_Toona_sureni_Merr._%28Syn._Toona_febrifuga%29_-..._-_btv1b101053051_%281_of_2%29.jpg | Cirad (Xylotheque collection, Programme Bois) | Public domain | crop 1150x1150 from 1299x2362 scan; shifted from olive-brown to red-brown (red x1.13, blue x0.86, hue -11 degrees) |
| `timber-spotted-gum.jpeg` | Eucalyptus maculata (= Corymbia maculata), Madagascar sample | https://commons.wikimedia.org/wiki/File:Collection_de_bois_de_la_Xyloth%C3%A8que_du_Cirad._Bois_de_Madagascar._Eucalyptus_maculata_-_Famille_des_Myrtac%C3%A9es_%28Madagascar%29_-_btv1b10115657f.jpg | Cirad | Public domain | crop 600x600 from 666x1532 scan, upscaled to 800; darkened and de-yellowed (saturation 62%) |
| `timber-sheoak.jpeg` | Allocasuarina torulosa (forest oak, a sheoak) | https://commons.wikimedia.org/wiki/File:Collection_de_bois_de_la_Xyloth%C3%A8que_du_Cirad._Bois_de_la_Collection_de_r%C3%A9f%C3%A9rence._Allocasuarina_torulosa_%28Aiton%29_L.A.S._Johnson_%28Syn._Casuarina_torulosa%29_-_Famille_des_Casuarinac%C3%A9es_%28La_R%C3%A9union%29_-_btv1b10115100b.jpg | Cirad | Public domain | crop 1350x1350 from 1566x2473 scan, scan border cropped out; darkened, slightly warmer |
| `timber-cherry.jpeg` | Prunus serotina (American black cherry), sliced veneer | https://commons.wikimedia.org/wiki/File:Amerikanischer_Kirschbaum_Holz.JPG | Philipp Zinger | CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0/) | crop 1900x1900 from 3840x1957 (as served at 2000px wide); saturation 65% |
| `timber-walnut.jpeg` | Juglans regia (veneer listed as "NB, Nussbaum, Walnussbaum"), not black walnut | https://commons.wikimedia.org/wiki/File:Nussbaum_Holz.JPG | Philipp Zinger | CC BY-SA 4.0 | crop 1900x1900 from 3840x1957; darkened to a deeper brown, saturation 70% |

CC BY-SA 4.0 requires attribution, a licence link, a note of changes (all above) and that the adapted images are shared under the same licence. The credit line under the timbers grid in `about.html` covers this. Remove the line and these files when David's own photos replace them.

Not changed: the Tasmanian Blackwood card still uses `Black-Butt.jpeg` (no usable Commons photo). The only Acacia melanoxylon wood files were split-log shots with bark and pink sapwood, which do not look like blackwood timber.

## Tas. Blackwood (`timber-blackwood.jpeg`)

- AI-generated (Gab, nano-banana-2, 28 Oct 2026). No usable finished blackwood on Commons (only green split logs, pink with white sapwood). Disclosed on the page.
- Prompt and the 3 raw variants: `_source/gab/` (gitignored, not served). Picked variant a; b had scratch-like artefacts, c looked like zebrano.
- Grade: resize 800, `-modulate 94,88,100`, R x1.03, B x0.93, `+level 4%,100%`, `-blur 0x0.6`, q75.
- Replace with David's own photo when he shoots the samples.
