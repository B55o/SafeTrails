
export function sectionTitle(imgUrl: any) {
  return (
    <div className="d-flex justify-content-center mb-2">
      <img src={imgUrl} />
    </div>
  );
}

export function sectionItem(subtitle: string, item: any, units?: string) {
  return (
    <div className="d-flex justify-content-between">
      <b>{subtitle}</b>
      {item} {units}
    </div>
  );
}
