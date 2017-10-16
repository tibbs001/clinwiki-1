class Facility < Aact

  has_many :facility_contacts
  has_many :facility_investigators

  def description
    "#{country}: #{name}, #{city} #{state} #{zip} #{primary_contact} (#{recruitment_status})"
  end

  def recruitment_status
    status.blank? ? 'status unknown' : status
  end

  def primary_contact
    facility_contacts.select{|fc|fc.contact_type.downcase=='primary'}.first.try(:contact_info)
  end

end
