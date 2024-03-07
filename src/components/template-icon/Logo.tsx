import React from "react";

export const Logo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="80"
      height="50"
      fill="none"
      // xmlns:v="https://vecta.io/nano"
    >
      <mask id="A" fill="#fff">
        <path d="M2 2.5h76v32H2v-32z" />
      </mask>
      <path d="M78 33.5H2v2h76v-2z" fill="#ddd" mask="url(#A)" />
      <path d="M8.863 23.5H2v7h6.863v-7z" fill="#fe3636" />
      <path d="M8.5 13h-6v6h6v-6z" fill="#ccc" />
      <path d="M19.157 12.999h-6.863v17.5h6.863v-17.5z" fill="#ffb200" />
      <path d="M29.453 2.5H22.59v28h6.863v-28z" fill="#5bd150" />
      <path d="M8.5 2.5h-6v6h6v-6zm10 0h-6v6h6v-6z" fill="#ccc" />
      <path
        d="M36.423 28.603v-6.125h-1.252v-1.312h2.625v.473c.377-.315.835-.473 1.373-.473h1.767v1.4h-1.939c-.366 0-.641.123-.824.367-.183.233-.28.473-.292.718v4.952h1.87v1.313H35.17v-1.312h1.252zM48.16 17.666v1.575h-1.63v-1.575h1.63zm-4.066 4.812v-1.312h3.98v7.438h2.539v1.312h-3.998v-7.437h-2.522zm8.991-1.312h1.578l2.007 7.542 1.956-7.542h1.527l-2.471 8.75h-2.11l-2.488-8.75zm12.698 8.75c-1.007 0-1.744-.216-2.213-.648-.469-.443-.703-1.161-.703-2.152v-3.15c0-1.003.212-1.721.635-2.152s1.127-.648 2.11-.648h.806c.812 0 1.424.233 1.836.7.423.455.635 1.126.635 2.012v2.275h-4.564v1.313c0 .362.109.642.326.84s.538.297.961.297h2.728v1.313h-2.556zm1.681-6.387a1.03 1.03 0 0 0-.292-.753.99.99 0 0 0-.738-.297h-.995c-.412 0-.703.099-.875.297-.16.187-.24.467-.24.84v1.225h3.14v-1.312zm6.023 5.074v-6.125h-1.253v-1.312h2.625v.473c.377-.315.835-.473 1.373-.473h1.767v1.4H76.06c-.366 0-.641.123-.824.367-.183.233-.28.473-.292.718v4.952h1.87v1.313h-4.581v-1.312h1.253zM38.609 3.083v1.575h-1.63V3.083h1.63zm-4.066 4.812V6.583h3.98v7.437h2.539v1.313h-3.998V7.896h-2.522zm10.758-1.312v.42c.355-.28.812-.42 1.373-.42h.789c.926 0 1.613.222 2.059.665.457.443.686 1.155.686 2.135v5.95H48.75v-6.3c0-.35-.103-.624-.309-.822-.195-.21-.463-.315-.806-.315h-1.132c-.378 0-.658.105-.841.315-.183.198-.275.414-.275.647v6.475h-1.458v-8.75h1.373zm11.617-2.187c-.183 0-.332.053-.446.157a.47.47 0 0 0-.154.367v1.662h2.762v1.312h-2.762v6.125h2.076v1.313H53.4V14.02h1.458V7.896H53.4V6.583h1.458V5.008c0-.595.166-1.062.498-1.4.332-.35.761-.525 1.287-.525h2.608v1.312h-2.334zm11.872 8.137c0 .98-.24 1.692-.721 2.135-.469.443-1.201.665-2.196.665h-.566c-.995 0-1.733-.222-2.213-.665-.469-.443-.703-1.155-.703-2.135v-3.15c0-.98.235-1.692.703-2.135.48-.443 1.218-.665 2.213-.665h.566c.995 0 1.727.222 2.196.665.48.443.721 1.155.721 2.135v3.15zm-1.458-3.5c0-.362-.109-.642-.326-.84s-.538-.298-.961-.298h-.909c-.423 0-.743.099-.961.298s-.326.478-.326.84v3.85c0 .362.109.642.326.84s.538.298.961.298h.909c.423 0 .744-.099.961-.298s.326-.478.326-.84v-3.85zM3.588 45.5v-5.264h-1.64v-.584h3.904v.584H4.22V45.5h-.632zm5.109.08c-.341 0-.637-.067-.888-.2-.251-.139-.445-.333-.584-.584s-.208-.541-.208-.872v-1.248c0-.336.069-.627.208-.872a1.41 1.41 0 0 1 .584-.576c.251-.139.547-.208.888-.208s.637.069.888.208a1.41 1.41 0 0 1 .584.576c.139.245.208.536.208.872v.776H7.641v.472c0 .357.091.635.272.832.187.192.448.288.784.288.283 0 .512-.056.688-.168a.74.74 0 0 0 .344-.488h.632c-.059.368-.237.659-.536.872s-.675.32-1.128.32zm1.056-2.552v-.352c0-.357-.091-.632-.272-.824-.181-.197-.443-.296-.784-.296-.336 0-.597.099-.784.296-.181.192-.272.467-.272.824v.28h2.176l-.064.072zm1.893 2.472v-4.4h.56v.544h.12l-.088.176c0-.245.064-.44.192-.584.133-.144.315-.216.544-.216a.67.67 0 0 1 .56.256c.139.171.211.411.216.72l-.168-.352h.264l-.112.176c0-.245.067-.44.2-.584s.315-.216.544-.216c.272 0 .483.101.632.304.155.203.232.472.232.808V45.5h-.592v-3.368c0-.192-.043-.341-.128-.448-.085-.112-.205-.168-.36-.168s-.277.056-.368.168c-.091.107-.136.256-.136.448V45.5h-.528v-3.368c0-.197-.045-.349-.136-.456-.085-.107-.205-.16-.36-.16s-.275.053-.36.16-.131.259-.136.456V45.5h-.592zm5.021 1.44V41.1h.632v.776h.168l-.192.264c0-.347.112-.619.336-.816.229-.203.531-.304.904-.304.443 0 .795.147 1.056.44.267.288.4.683.4 1.184v1.304c0 .336-.061.627-.184.872a1.37 1.37 0 0 1-.512.56c-.213.133-.467.2-.76.2-.368 0-.667-.101-.896-.304s-.344-.475-.344-.816l.168.264h-.152l.008.896v1.32h-.632zm1.648-1.912c.32 0 .568-.096.744-.288.181-.192.272-.464.272-.816v-1.248c0-.357-.091-.629-.272-.816s-.424-.288-.744-.288c-.309 0-.557.099-.744.296-.181.192-.272.461-.272.808v1.248c0 .347.091.619.272.816.187.192.435.288.744.288zm5.349.472c-.251 0-.469-.048-.656-.144a1.03 1.03 0 0 1-.424-.416c-.101-.181-.152-.395-.152-.64v-4.064h-1.464v-.576h2.096v4.64c0 .197.053.352.16.464.107.107.253.16.44.16h1.4v.576h-1.4zm3.877.08c-.464 0-.829-.117-1.096-.352-.267-.24-.4-.563-.4-.968s.131-.715.392-.944c.261-.235.613-.352 1.056-.352h1.4V42.5c0-.293-.085-.52-.256-.68s-.413-.24-.728-.24c-.277 0-.509.061-.696.184a.68.68 0 0 0-.312.496h-.64a1.31 1.31 0 0 1 .528-.904c.304-.224.683-.336 1.136-.336.491 0 .88.133 1.168.4.288.261.432.616.432 1.064V45.5H28.9v-.856h-.104l.12-.128c0 .325-.125.584-.376.776s-.584.288-1 .288zm.152-.512c.352 0 .64-.088.864-.264s.336-.405.336-.688v-.664H27.5c-.251 0-.451.069-.6.208s-.224.328-.224.568a.77.77 0 0 0 .272.616c.181.149.429.224.744.224zm5.469.432c-.368 0-.653-.096-.856-.288-.203-.197-.304-.475-.304-.832v-2.704h-1.248V41.1h1.248v-1.24h.64v1.24h1.768v.576h-1.768v2.704c0 .363.173.544.52.544h1.168v.576h-1.168zm4.317.08c-.341 0-.637-.067-.888-.2-.251-.139-.445-.333-.584-.584s-.208-.541-.208-.872v-1.248c0-.336.069-.627.208-.872a1.41 1.41 0 0 1 .584-.576c.251-.139.547-.208.888-.208s.637.069.888.208a1.41 1.41 0 0 1 .584.576c.139.245.208.536.208.872v.776h-2.736v.472c0 .357.091.635.272.832.187.192.448.288.784.288.283 0 .512-.056.688-.168a.74.74 0 0 0 .344-.488h.632c-.059.368-.237.659-.536.872s-.675.32-1.128.32zm1.056-2.552v-.352c0-.357-.091-.632-.272-.824-.181-.197-.443-.296-.784-.296-.336 0-.597.099-.784.296-.181.192-.272.467-.272.824v.28h2.176l-.064.072zm6.922 2.472v-5.84h1.608c.523 0 .933.136 1.232.408s.448.635.448 1.104c0 .267-.056.501-.168.704-.107.197-.261.352-.464.464-.197.107-.437.157-.72.152v-.112c.304 0 .565.061.784.184.224.117.397.291.52.52.123.224.184.491.184.8 0 .331-.069.619-.208.864a1.43 1.43 0 0 1-.592.56c-.256.128-.563.192-.92.192h-1.704zm.616-.576h1.032c.357 0 .637-.093.84-.28.208-.192.312-.451.312-.776 0-.336-.104-.605-.312-.808s-.483-.312-.84-.312h-1.032v2.176zm0-2.728h.992c.325 0 .581-.088.768-.264s.28-.416.28-.72-.093-.541-.28-.712c-.181-.176-.437-.264-.768-.264h-.992v1.96zm5.789 3.384c-.496 0-.893-.149-1.192-.448-.293-.299-.44-.704-.44-1.216V41.1h.632v2.816c0 .347.088.619.264.816.181.192.427.288.736.288.315 0 .563-.096.744-.288.181-.197.272-.469.272-.816V41.1h.632v2.816c0 .512-.149.917-.448 1.216s-.699.448-1.2.448zm3.109-.08v-.576h1.568v-3.248H55.17V41.1h2.008v3.824h1.488v.576H54.97zm1.816-5.208a.6.6 0 0 1-.4-.128c-.096-.085-.144-.203-.144-.352 0-.155.048-.277.144-.368.101-.091.235-.136.4-.136s.296.045.392.136a.47.47 0 0 1 .152.368.45.45 0 0 1-.152.352c-.096.085-.227.128-.392.128zM62.04 45.5c-.251 0-.469-.048-.656-.144a1.03 1.03 0 0 1-.424-.416c-.101-.181-.152-.395-.152-.64v-4.064h-1.464v-.576h2.096v4.64c0 .197.053.352.16.464.107.107.253.16.44.16h1.4v.576h-1.4zm4.005.08c-.437 0-.792-.147-1.064-.44-.267-.293-.4-.688-.4-1.184v-1.304c0-.501.133-.899.4-1.192s.621-.44 1.064-.44c.368 0 .664.101.888.304s.344.475.344.816l-.168-.264h.152l-.008-.96V39.66h.632v5.84h-.632v-.776h-.168l.192-.264c0 .347-.115.621-.344.824-.224.197-.52.296-.888.296zm.2-.552c.315 0 .56-.096.736-.288.181-.197.272-.469.272-.816v-1.248c0-.347-.091-.616-.272-.808-.176-.197-.421-.296-.736-.296s-.571.096-.752.288-.272.464-.272.816v1.248c0 .352.091.624.272.816s.432.288.752.288zm4.813.552c-.341 0-.637-.067-.888-.2-.251-.139-.445-.333-.584-.584s-.208-.541-.208-.872v-1.248c0-.336.069-.627.208-.872a1.41 1.41 0 0 1 .584-.576c.251-.139.547-.208.888-.208s.637.069.888.208a1.41 1.41 0 0 1 .584.576c.139.245.208.536.208.872v.776H70v.472c0 .357.091.635.272.832.187.192.448.288.784.288.283 0 .512-.056.688-.168a.74.74 0 0 0 .344-.488h.632c-.059.368-.237.659-.536.872s-.675.32-1.128.32zm1.056-2.552v-.352c0-.357-.091-.632-.272-.824-.181-.197-.443-.296-.784-.296-.336 0-.597.099-.784.296-.181.192-.272.467-.272.824v.28h2.176l-.064.072zm2.261 2.472v-4.4h.624v.816h.152l-.224.504c.005-.448.115-.792.328-1.032.213-.245.52-.368.92-.368.464 0 .832.147 1.104.44.277.288.416.677.416 1.168v.264h-.648v-.216c0-.357-.088-.632-.264-.824-.176-.197-.427-.296-.752-.296-.315 0-.563.099-.744.296s-.272.472-.272.824V45.5h-.64z"
        fill="#434343"
      />
    </svg>
  );
};
